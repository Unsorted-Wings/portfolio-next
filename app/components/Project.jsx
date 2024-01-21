import * as React from "react"

import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

const tags = {}

export function ScrollAreaDemo() {
    return (
        <ScrollArea className="h-72 w-48 rounded-md border">
            <div className="p-4">
                <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
                <div key="1" className="text-sm">
                    asfawds
                </div>
                <Separator className="my-2" />

            </div>
        </ScrollArea>
    )
}
