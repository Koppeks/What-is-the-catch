import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AnalysisRunIncludeSchema } from '../inputTypeSchemas/AnalysisRunIncludeSchema'
import { AnalysisRunWhereUniqueInputSchema } from '../inputTypeSchemas/AnalysisRunWhereUniqueInputSchema'
import { AnalysisRunCreateInputSchema } from '../inputTypeSchemas/AnalysisRunCreateInputSchema'
import { AnalysisRunUncheckedCreateInputSchema } from '../inputTypeSchemas/AnalysisRunUncheckedCreateInputSchema'
import { AnalysisRunUpdateInputSchema } from '../inputTypeSchemas/AnalysisRunUpdateInputSchema'
import { AnalysisRunUncheckedUpdateInputSchema } from '../inputTypeSchemas/AnalysisRunUncheckedUpdateInputSchema'
import { DocumentArgsSchema } from "../outputTypeSchemas/DocumentArgsSchema"
import { ClauseAnalysisFindManyArgsSchema } from "../outputTypeSchemas/ClauseAnalysisFindManyArgsSchema"
import { AnalysisRunCountOutputTypeArgsSchema } from "../outputTypeSchemas/AnalysisRunCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AnalysisRunSelectSchema: z.ZodType<Prisma.AnalysisRunSelect> = z.object({
  id: z.boolean().optional(),
  documentId: z.boolean().optional(),
  status: z.boolean().optional(),
  engineVersion: z.boolean().optional(),
  startedAt: z.boolean().optional(),
  finishedAt: z.boolean().optional(),
  overallRisk: z.boolean().optional(),
  notes: z.boolean().optional(),
  document: z.union([z.boolean(),z.lazy(() => DocumentArgsSchema)]).optional(),
  clauseAnalyses: z.union([z.boolean(),z.lazy(() => ClauseAnalysisFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => AnalysisRunCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const AnalysisRunUpsertArgsSchema: z.ZodType<Prisma.AnalysisRunUpsertArgs> = z.object({
  select: AnalysisRunSelectSchema.optional(),
  include: z.lazy(() => AnalysisRunIncludeSchema).optional(),
  where: AnalysisRunWhereUniqueInputSchema, 
  create: z.union([ AnalysisRunCreateInputSchema, AnalysisRunUncheckedCreateInputSchema ]),
  update: z.union([ AnalysisRunUpdateInputSchema, AnalysisRunUncheckedUpdateInputSchema ]),
}).strict();

export default AnalysisRunUpsertArgsSchema;
