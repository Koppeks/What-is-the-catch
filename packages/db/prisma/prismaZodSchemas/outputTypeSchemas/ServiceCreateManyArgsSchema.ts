import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceCreateManyInputSchema } from '../inputTypeSchemas/ServiceCreateManyInputSchema'

export const ServiceCreateManyArgsSchema: z.ZodType<Prisma.ServiceCreateManyArgs> = z.object({
  data: z.union([ ServiceCreateManyInputSchema,ServiceCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() as z.ZodType<Prisma.ServiceCreateManyArgs>;

export default ServiceCreateManyArgsSchema;
