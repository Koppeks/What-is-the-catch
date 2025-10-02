import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyWhereInputSchema } from '../inputTypeSchemas/CompanyWhereInputSchema'

export const CompanyDeleteManyArgsSchema: z.ZodType<Prisma.CompanyDeleteManyArgs> = z.object({
  where: CompanyWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default CompanyDeleteManyArgsSchema;
