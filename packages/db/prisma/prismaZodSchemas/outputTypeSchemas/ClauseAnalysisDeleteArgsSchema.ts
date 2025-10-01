import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ClauseAnalysisIncludeSchema } from '../inputTypeSchemas/ClauseAnalysisIncludeSchema'
import { ClauseAnalysisWhereUniqueInputSchema } from '../inputTypeSchemas/ClauseAnalysisWhereUniqueInputSchema'
import { AnalysisRunArgsSchema } from "../outputTypeSchemas/AnalysisRunArgsSchema"
import { ClauseArgsSchema } from "../outputTypeSchemas/ClauseArgsSchema"
import { CategoryHitFindManyArgsSchema } from "../outputTypeSchemas/CategoryHitFindManyArgsSchema"
import { ClauseAnalysisCountOutputTypeArgsSchema } from "../outputTypeSchemas/ClauseAnalysisCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ClauseAnalysisSelectSchema: z.ZodType<Prisma.ClauseAnalysisSelect> = z.object({
  id: z.boolean().optional(),
  runId: z.boolean().optional(),
  clauseId: z.boolean().optional(),
  severity: z.boolean().optional(),
  riskScore: z.boolean().optional(),
  triggerWarnings: z.boolean().optional(),
  run: z.union([z.boolean(),z.lazy(() => AnalysisRunArgsSchema)]).optional(),
  clause: z.union([z.boolean(),z.lazy(() => ClauseArgsSchema)]).optional(),
  categoryHits: z.union([z.boolean(),z.lazy(() => CategoryHitFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ClauseAnalysisCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const ClauseAnalysisDeleteArgsSchema: z.ZodType<Prisma.ClauseAnalysisDeleteArgs> = z.object({
  select: ClauseAnalysisSelectSchema.optional(),
  include: z.lazy(() => ClauseAnalysisIncludeSchema).optional(),
  where: ClauseAnalysisWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.ClauseAnalysisDeleteArgs>;

export default ClauseAnalysisDeleteArgsSchema;
