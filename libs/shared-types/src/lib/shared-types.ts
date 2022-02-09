export function sharedTypes(): string {
  return 'shared-types';
}

export interface IPost {
  id: string;
  userId: number;
  title: string;
  body: string;
}
