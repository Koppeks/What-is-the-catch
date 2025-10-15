import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SectionWhereInputSchema } from '../inputTypeSchemas/SectionWhereInputSchema'

export const SectionDeleteManyArgsSchema: z.ZodType<Prisma.SectionDeleteManyArgs> = z.object({
  where: SectionWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default SectionDeleteManyArgsSchema;
