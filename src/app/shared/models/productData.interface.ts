export interface Iproduct{
     id: string;
     name: string;
     description:string;
     imgUrl: string;
     status: "ordered" | "delivered" | "dispatched"
}