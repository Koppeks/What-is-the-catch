import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceCreateManyInputSchema } from '../inputTypeSchemas/ServiceCreateManyInputSchema'

export const ServiceCreateManyAndReturnArgsSchema: z.ZodType<Prisma.ServiceCreateManyAndReturnArgs> = z.object({
  data: z.union([ ServiceCreateManyInputSchema, ServiceCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default ServiceCreateManyAndReturnArgsSchema;
