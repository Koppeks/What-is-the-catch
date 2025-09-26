import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ClauseFindManyArgsSchema } from "../outputTypeSchemas/ClauseFindManyArgsSchema"
import { TriggerFindManyArgsSchema } from "../outputTypeSchemas/TriggerFindManyArgsSchema"
import { AnalysisRequestCountOutputTypeArgsSchema } from "../outputTypeSchemas/AnalysisRequestCountOutputTypeArgsSchema"

export const AnalysisRequestSelectSchema: z.ZodType<Prisma.AnalysisRequestSelect> = z.object({
  id: z.boolean().optional(),
  type: z.boolean().optional(),
  status: z.boolean().optional(),
  sourceUrl: z.boolean().optional(),
  language: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  clauses: z.union([z.boolean(),z.lazy(() => ClauseFindManyArgsSchema)]).optional(),
  triggers: z.union([z.boolean(),z.lazy(() => TriggerFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => AnalysisRequestCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default AnalysisRequestSelectSchema;
