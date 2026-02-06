/**
 * Common TypeScript type definitions.
 */

// User types
export interface User {
    id: string;
    email: string;
    full_name: string;
    role: 'admin' | 'manager' | 'operator' | 'viewer';
    is_active: boolean;
    is_verified: boolean;
    created_at: string;
    updated_at: string;
}

// Order types
export type OrderStatus =
    | 'draft'
    | 'pending'
    | 'confirmed'
    | 'processing'
    | 'shipped'
    | 'delivered'
    | 'cancelled'
    | 'refunded';

export interface OrderItem {
    id: string;
    product_id: string;
    product_name: string;
    sku: string;
    quantity: number;
    unit_price: number;
    discount_percent: number;
    tax_percent: number;
    total: number;
}

export interface Order {
    id: string;
    order_number: string;
    customer_name: string;
    customer_email: string | null;
    status: OrderStatus;
    items: OrderItem[];
    subtotal: number;
    total_discount: number;
    total_tax: number;
    shipping_cost: number;
    grand_total: number;
    currency: string;
    created_at: string;
    updated_at: string;
}

// Inventory types
export interface InventoryItem {
    id: string;
    sku: string;
    name: string;
    description: string | null;
    barcode: string | null;
    category: string | null;
    brand: string | null;
    cost_price: number;
    selling_price: number;
    currency: string;
    quantity_on_hand: number;
    quantity_reserved: number;
    quantity_available: number;
    reorder_point: number;
    needs_reorder: boolean;
    is_active: boolean;
    created_at: string;
}

// Pagination
export interface PaginatedResponse<T> {
    items: T[];
    total: number;
    skip: number;
    limit: number;
}

// API Response types
export interface ApiError {
    detail: string;
    type?: string;
}

// Auth types
export interface AuthTokens {
    access_token: string;
    refresh_token: string;
    token_type: string;
    expires_in: number;
}

export interface AuthState {
    user: User | null;
    tokens: AuthTokens | null;
    isAuthenticated: boolean;
    isLoading: boolean;
}
