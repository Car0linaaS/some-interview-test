export interface Post {
    id: number;
    link: string;
    title: {
      rendered: string;
    };
    date: string;
    excerpt: {
      rendered: string;
    };
    content: {
        rendered:string;
    }
    _embedded: {
      "wp:featuredmedia": {
        source_url: string;
      }[];
    };
  }