import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AnalysisRunIncludeSchema } from '../inputTypeSchemas/AnalysisRunIncludeSchema'
import { AnalysisRunWhereUniqueInputSchema } from '../inputTypeSchemas/AnalysisRunWhereUniqueInputSchema'
import { DocumentArgsSchema } from "../outputTypeSchemas/DocumentArgsSchema"
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
}).strict()

export const AnalysisRunFindUniqueArgsSchema: z.ZodType<Prisma.AnalysisRunFindUniqueArgs> = z.object({
  select: AnalysisRunSelectSchema.optional(),
  include: z.lazy(() => AnalysisRunIncludeSchema).optional(),
  where: AnalysisRunWhereUniqueInputSchema, 
}).strict();

export default AnalysisRunFindUniqueArgsSchema;
