import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AnalysisRequestIncludeSchema } from '../inputTypeSchemas/AnalysisRequestIncludeSchema'
import { AnalysisRequestUpdateInputSchema } from '../inputTypeSchemas/AnalysisRequestUpdateInputSchema'
import { AnalysisRequestUncheckedUpdateInputSchema } from '../inputTypeSchemas/AnalysisRequestUncheckedUpdateInputSchema'
import { AnalysisRequestWhereUniqueInputSchema } from '../inputTypeSchemas/AnalysisRequestWhereUniqueInputSchema'
import { ClauseFindManyArgsSchema } from "../outputTypeSchemas/ClauseFindManyArgsSchema"
import { TriggerFindManyArgsSchema } from "../outputTypeSchemas/TriggerFindManyArgsSchema"
import { AnalysisRequestCountOutputTypeArgsSchema } from "../outputTypeSchemas/AnalysisRequestCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

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

export const AnalysisRequestUpdateArgsSchema: z.ZodType<Prisma.AnalysisRequestUpdateArgs> = z.object({
  select: AnalysisRequestSelectSchema.optional(),
  include: z.lazy(() => AnalysisRequestIncludeSchema).optional(),
  data: z.union([ AnalysisRequestUpdateInputSchema,AnalysisRequestUncheckedUpdateInputSchema ]),
  where: AnalysisRequestWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.AnalysisRequestUpdateArgs>;

export default AnalysisRequestUpdateArgsSchema;
