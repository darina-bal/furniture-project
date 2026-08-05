import type { Product } from "@/shared/lib/types"

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
}