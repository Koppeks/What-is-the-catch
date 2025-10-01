import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AnalysisRunIncludeSchema } from '../inputTypeSchemas/AnalysisRunIncludeSchema'
import { AnalysisRunWhereInputSchema } from '../inputTypeSchemas/AnalysisRunWhereInputSchema'
import { AnalysisRunOrderByWithRelationInputSchema } from '../inputTypeSchemas/AnalysisRunOrderByWithRelationInputSchema'
import { AnalysisRunWhereUniqueInputSchema } from '../inputTypeSchemas/AnalysisRunWhereUniqueInputSchema'
import { AnalysisRunScalarFieldEnumSchema } from '../inputTypeSchemas/AnalysisRunScalarFieldEnumSchema'
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

export const AnalysisRunFindFirstArgsSchema: z.ZodType<Prisma.AnalysisRunFindFirstArgs> = z.object({
  select: AnalysisRunSelectSchema.optional(),
  include: z.lazy(() => AnalysisRunIncludeSchema).optional(),
  where: AnalysisRunWhereInputSchema.optional(),
  orderBy: z.union([ AnalysisRunOrderByWithRelationInputSchema.array(),AnalysisRunOrderByWithRelationInputSchema ]).optional(),
  cursor: AnalysisRunWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AnalysisRunScalarFieldEnumSchema,AnalysisRunScalarFieldEnumSchema.array() ]).optional(),
}).strict() as z.ZodType<Prisma.AnalysisRunFindFirstArgs>;

export default AnalysisRunFindFirstArgsSchema;
