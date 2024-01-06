import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Icons } from "@/components/icons"

export const MonthRevenueCard = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Receita total (mês)
        </CardTitle>
        <Icons.dollar className="w-4 h-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="text-2xl font-semibold tracking-tight">R$ 1300,00</span>
        <p className="text-xs text-muted-foreground">
          <span className="text-emerald-500">+2%</span> em relação ao ano passado
        </p>
      </CardContent>
    </Card>
  )
}
