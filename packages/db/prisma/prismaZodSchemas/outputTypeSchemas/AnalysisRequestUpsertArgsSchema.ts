import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AnalysisRequestIncludeSchema } from '../inputTypeSchemas/AnalysisRequestIncludeSchema'
import { AnalysisRequestWhereUniqueInputSchema } from '../inputTypeSchemas/AnalysisRequestWhereUniqueInputSchema'
import { AnalysisRequestCreateInputSchema } from '../inputTypeSchemas/AnalysisRequestCreateInputSchema'
import { AnalysisRequestUncheckedCreateInputSchema } from '../inputTypeSchemas/AnalysisRequestUncheckedCreateInputSchema'
import { AnalysisRequestUpdateInputSchema } from '../inputTypeSchemas/AnalysisRequestUpdateInputSchema'
import { AnalysisRequestUncheckedUpdateInputSchema } from '../inputTypeSchemas/AnalysisRequestUncheckedUpdateInputSchema'
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

export const AnalysisRequestUpsertArgsSchema: z.ZodType<Prisma.AnalysisRequestUpsertArgs> = z.object({
  select: AnalysisRequestSelectSchema.optional(),
  include: z.lazy(() => AnalysisRequestIncludeSchema).optional(),
  where: AnalysisRequestWhereUniqueInputSchema,
  create: z.union([ AnalysisRequestCreateInputSchema,AnalysisRequestUncheckedCreateInputSchema ]),
  update: z.union([ AnalysisRequestUpdateInputSchema,AnalysisRequestUncheckedUpdateInputSchema ]),
}).strict() as z.ZodType<Prisma.AnalysisRequestUpsertArgs>;

export default AnalysisRequestUpsertArgsSchema;
