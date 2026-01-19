import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Candy, HeartPlus, Plus } from "lucide-react";
import { CardItem } from "@/components/CardItem";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* <div className="createItem flex p-2 space-x-2">
        <Input className="w-md" placeholder="Nome do produto" />
        <Button>
          <Plus />
          Cadastrar Item
        </Button>
        <p>Favoritos: 3/4</p>
        <p>Cards: 4</p>
      </div>
      <div className="categories">
        <p>Categorias:</p>
        <Badge className="">
          <Candy /> Com açúcar
        </Badge>
        <Badge className="">
          <HeartPlus /> Zero açúcar
        </Badge>
      </div> */}
      <main className="flex flex-col justify-center items-center bg-blue-500 h-screen w-full">
        <h1 className="mb-20">Produto em destaque</h1>
        <div>
          <Suspense fallback={<p>Loading...</p>}>
            <CardItem />
          </Suspense>
        </div>
      </main>
    </div>
  );
}
//button, card, input, separator(linha), badge, junta icon + texto
