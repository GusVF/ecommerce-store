export interface Billboard {
  id:       string;
  name:     string;
  imageUrl: string;
};

export interface Category {
  id:   String;
  name: String;
  billboard: Billboard;
}