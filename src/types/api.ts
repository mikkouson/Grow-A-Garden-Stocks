export interface ApiItem {
  item_id: string;
  display_name: string;
  quantity: number;
  start_data_unix: number;
  end_date_unix: number;
  Date_Start: Date;
  Date_End: Date;
  icon: string;
}

export interface ApiResponse {
  seed_stock: ApiItem[];
  gear_stock: ApiItem[];
  egg_stock: ApiItem[];
  cosmetic_stock: ApiItem[];
  eventshop_stock: ApiItem[];
}
