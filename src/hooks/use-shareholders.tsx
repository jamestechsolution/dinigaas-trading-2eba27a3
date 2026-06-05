import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export type Shareholder = {
  id: string;
  name: string;
  role: string;
  stake: string;
  bio: string;
  email: string;
  phone: string;
  image_url: string | null;
  sort_order: number;
  active: boolean;
};

export function useShareholders() {
  const [items, setItems] = useState<Shareholder[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const { data } = await supabase
        .from("shareholders")
        .select("*")
        .eq("active", true)
        .order("sort_order", { ascending: true });
      if (cancelled) return;
      setItems((data ?? []) as Shareholder[]);
      setLoading(false);
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return { items, loading };
}
