import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AnalysisRunWhereInputSchema } from '../inputTypeSchemas/AnalysisRunWhereInputSchema'

export const AnalysisRunDeleteManyArgsSchema: z.ZodType<Prisma.AnalysisRunDeleteManyArgs> = z.object({
  where: AnalysisRunWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default AnalysisRunDeleteManyArgsSchema;
