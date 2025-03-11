import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, FileText, Download, Trash2 } from "lucide-react"

export function PublicationsManager() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Publications</h3>
        <Button className="bg-[#1B4332] hover:bg-[#2D6A4F]">
          <Plus className="h-4 w-4 mr-2" /> Add Publication
        </Button>
      </div>
      <div className="grid gap-4">
        {[1, 2, 3].map((item) => (
          <Card key={item}>
            <CardHeader className="flex flex-row items-center justify-between">
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-[#1B4332]" />
                <CardTitle className="text-base">Publication {item}</CardTitle>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="icon">
                  <Download className="h-4 w-4" />
                </Button>
                <Button variant="destructive" size="icon">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Added on: {new Date().toLocaleDateString()}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}