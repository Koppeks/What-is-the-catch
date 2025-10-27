import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HitterWhereInputSchema } from '../inputTypeSchemas/HitterWhereInputSchema'

export const HitterDeleteManyArgsSchema: z.ZodType<Prisma.HitterDeleteManyArgs> = z.object({
  where: HitterWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default HitterDeleteManyArgsSchema;
