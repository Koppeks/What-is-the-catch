import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DocumentArgsSchema } from "../outputTypeSchemas/DocumentArgsSchema"

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

export default AnalysisRunSelectSchema;
