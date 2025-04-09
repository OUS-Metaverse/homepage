/**
 * Tのすべてのプロパティを再帰的にオプショナルにするユーティリティ型です。
 * 
 * これにより、オブジェクトの部分的な型を表現することができます。
 */
export type DeepPartial<T> = T extends object ? {
    [P in keyof T]?: DeepPartial<T[P]>;
} : T;