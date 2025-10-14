import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DocumentArgsSchema } from "../outputTypeSchemas/DocumentArgsSchema"

export const AnalysisRunIncludeSchema: z.ZodType<Prisma.AnalysisRunInclude> = z.object({
  document: z.union([z.boolean(),z.lazy(() => DocumentArgsSchema)]).optional(),
}).strict();

export default AnalysisRunIncludeSchema;
