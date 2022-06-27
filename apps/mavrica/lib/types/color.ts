export interface RGBA {
  r: number;
  g: number;
  b: number;
  a: number;
}

export interface RGB {
  r: number;
  g: number;
  b: number;
}

export interface ColorCount {
  rgb: RGB;
  count: number;
  relativeLuminance: number;
}

type Temperature = 'warm' | 'cool' | 'neutral';

export interface Color {
  alternativeNames?: string[];
  name?: string;
  hex: string;
  tags?: string[];
  temperature?: Temperature;
}

export interface Palette {
  colors: Color[];
  name: string;
  sources: string[];
}
