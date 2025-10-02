import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DomainWhereInputSchema } from '../inputTypeSchemas/DomainWhereInputSchema'

export const DomainDeleteManyArgsSchema: z.ZodType<Prisma.DomainDeleteManyArgs> = z.object({
  where: DomainWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default DomainDeleteManyArgsSchema;
