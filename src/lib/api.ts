/**
 * API Client - Type-safe API wrapper for backend communication.
 */

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

interface RequestOptions {
    method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
    body?: unknown;
    headers?: Record<string, string>;
}

interface ApiError {
    detail: string;
    type?: string;
}

class ApiClient {
    private baseUrl: string;
    private token: string | null = null;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    setToken(token: string | null) {
        this.token = token;
    }

    private async request<T>(
        endpoint: string,
        options: RequestOptions = {}
    ): Promise<T> {
        const { method = 'GET', body, headers = {} } = options;

        const requestHeaders: Record<string, string> = {
            'Content-Type': 'application/json',
            ...headers,
        };

        if (this.token) {
            requestHeaders['Authorization'] = `Bearer ${this.token}`;
        }

        const response = await fetch(`${this.baseUrl}${endpoint}`, {
            method,
            headers: requestHeaders,
            body: body ? JSON.stringify(body) : undefined,
        });

        if (!response.ok) {
            const error: ApiError = await response.json().catch(() => ({
                detail: 'An unexpected error occurred',
            }));
            throw new Error(error.detail);
        }

        // Handle 204 No Content
        if (response.status === 204) {
            return undefined as T;
        }

        return response.json();
    }

    // Auth endpoints
    async login(email: string, password: string) {
        const formData = new URLSearchParams();
        formData.append('username', email);
        formData.append('password', password);

        const response = await fetch(`${this.baseUrl}/api/v1/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: formData,
        });

        if (!response.ok) {
            throw new Error('Invalid credentials');
        }

        return response.json();
    }

    async getCurrentUser() {
        return this.request<User>('/api/v1/auth/me');
    }

    // User endpoints
    async getUsers(skip = 0, limit = 50) {
        return this.request<UserListResponse>(`/api/v1/users?skip=${skip}&limit=${limit}`);
    }

    async getUser(id: string) {
        return this.request<User>(`/api/v1/users/${id}`);
    }

    async createUser(data: CreateUserRequest) {
        return this.request<User>('/api/v1/users', {
            method: 'POST',
            body: data,
        });
    }

    async updateUser(id: string, data: UpdateUserRequest) {
        return this.request<User>(`/api/v1/users/${id}`, {
            method: 'PATCH',
            body: data,
        });
    }

    async deleteUser(id: string) {
        return this.request<void>(`/api/v1/users/${id}`, {
            method: 'DELETE',
        });
    }

    // Order endpoints
    async getOrders(skip = 0, limit = 50, status?: string) {
        let url = `/api/v1/orders?skip=${skip}&limit=${limit}`;
        if (status) url += `&status=${status}`;
        return this.request<OrderListResponse>(url);
    }

    async getOrder(id: string) {
        return this.request<Order>(`/api/v1/orders/${id}`);
    }

    async createOrder(data: CreateOrderRequest) {
        return this.request<Order>('/api/v1/orders', {
            method: 'POST',
            body: data,
        });
    }

    // Inventory endpoints
    async getInventory(skip = 0, limit = 50, search?: string) {
        let url = `/api/v1/inventory?skip=${skip}&limit=${limit}`;
        if (search) url += `&search=${encodeURIComponent(search)}`;
        return this.request<InventoryListResponse>(url);
    }

    async getInventoryItem(id: string) {
        return this.request<InventoryItem>(`/api/v1/inventory/${id}`);
    }

    async getLowStockItems() {
        return this.request<InventoryItem[]>('/api/v1/inventory/low-stock');
    }

    // Health check
    async healthCheck() {
        return this.request<HealthResponse>('/health');
    }
}

// Types
export interface User {
    id: string;
    email: string;
    full_name: string;
    role: string;
    is_active: boolean;
    is_verified: boolean;
    created_at: string;
}

export interface UserListResponse {
    items: User[];
    total: number;
    skip: number;
    limit: number;
}

export interface CreateUserRequest {
    email: string;
    password: string;
    full_name: string;
    role?: string;
}

export interface UpdateUserRequest {
    full_name?: string;
    role?: string;
    is_active?: boolean;
}

export interface Order {
    id: string;
    order_number: string;
    customer_name: string;
    customer_email: string | null;
    status: string;
    items: OrderItem[];
    subtotal: number;
    grand_total: number;
    currency: string;
    created_at: string;
}

export interface OrderItem {
    id: string;
    product_name: string;
    quantity: number;
    unit_price: number;
    total: number;
}

export interface OrderListResponse {
    items: Order[];
    total: number;
    skip: number;
    limit: number;
}

export interface CreateOrderRequest {
    customer_name: string;
    customer_email?: string;
}

export interface InventoryItem {
    id: string;
    sku: string;
    name: string;
    description: string | null;
    category: string | null;
    selling_price: number;
    quantity_on_hand: number;
    quantity_available: number;
    needs_reorder: boolean;
    is_active: boolean;
}

export interface InventoryListResponse {
    items: InventoryItem[];
    total: number;
    skip: number;
    limit: number;
}

export interface HealthResponse {
    status: string;
    timestamp: string;
    environment: string;
    version: string;
}

// Singleton instance
export const apiClient = new ApiClient(API_URL);
