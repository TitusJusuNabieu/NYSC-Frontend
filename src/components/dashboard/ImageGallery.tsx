import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Plus, Trash2 } from "lucide-react"

export function ImageGallery() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Gallery Images</h3>
        <Button className="bg-[#1B4332] hover:bg-[#2D6A4F]">
          <Plus className="h-4 w-4 mr-2" /> Add Image
        </Button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <Card key={item} className="group relative">
            <CardContent className="p-2">
              <img
                src={`/images/placeholder-${item}.jpg`}
                alt={`Gallery image ${item}`}
                className="w-full h-48 object-cover rounded-md"
              />
              <Button
                variant="destructive"
                size="icon"
                className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}