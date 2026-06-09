import { getTranslations } from 'next-intl/server'
import type { StatRow } from '@/lib/stats'

interface StatsTableProps {
  rows: StatRow[]
  caption?: string
}

export default async function StatsTable({ rows, caption }: StatsTableProps) {
  const t = await getTranslations('table')
  const hasNotes = rows.some((row) => row.note)

  return (
    <div className="overflow-x-auto rounded-card border border-border-default">
      <table className="w-full min-w-[400px]">
        {caption && <caption className="sr-only">{caption}</caption>}
        <thead>
          <tr className="border-b border-border-default bg-surface-subtle">
            <th
              scope="col"
              className="text-left px-5 py-3 text-xs font-semibold text-text-subtle uppercase tracking-widest w-1/2"
            >
              {t('indicator')}
            </th>
            <th
              scope="col"
              className="text-left px-5 py-3 text-xs font-semibold text-text-subtle uppercase tracking-widest"
            >
              {t('figure')}
            </th>
            {hasNotes && (
              <th
                scope="col"
                className="text-left px-5 py-3 text-xs font-semibold text-text-subtle uppercase tracking-widest hidden sm:table-cell"
              >
                {t('note')}
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr
              key={index}
              className={`border-b border-border-faint last:border-0 group transition-colors duration-150 hover:bg-primary-600/5 ${
                index % 2 === 0 ? 'bg-surface-raised' : 'bg-surface-overlay'
              }`}
            >
              {/* Row header for screen readers */}
              <th
                scope="row"
                className="px-5 py-3.5 text-sm font-normal text-left text-text-muted group-hover:text-text-secondary transition-colors duration-150"
              >
                {row.label}
              </th>
              <td className="px-5 py-3.5 text-sm font-semibold text-white whitespace-nowrap">
                {row.value}
              </td>
              {hasNotes && (
                <td className="px-5 py-3.5 text-xs text-text-faint hidden sm:table-cell whitespace-nowrap">
                  {row.note ?? '—'}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
