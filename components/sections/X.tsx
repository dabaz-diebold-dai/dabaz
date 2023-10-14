import Link from "next/link"
import { CalendarDays } from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@dabaz/components/ui/avatar"
import { Button } from "@dabaz/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@dabaz/components/ui/hover-card"

export function X() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Link href="https://twitter.com/dabaz_official" className="text-xl text-neutral-600 hover:text-neutral-900 underline">@dabaz_official</Link>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="/dabaz.png" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@dabaz_official</h4>
            <p className="text-sm">
              G / Bug Hunter / Musician / UI Design and Front-end Development Hobbyist G / 白帽黑客 / 音乐人 / UI设计和前端开发爱好者
            </p>
            <div className="flex items-center pt-2">
              <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
              <span className="text-xs text-muted-foreground">
                Joined January 2019
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
