import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceDomainCreateManyInputSchema } from '../inputTypeSchemas/ServiceDomainCreateManyInputSchema'

export const ServiceDomainCreateManyArgsSchema: z.ZodType<Prisma.ServiceDomainCreateManyArgs> = z.object({
  data: z.union([ ServiceDomainCreateManyInputSchema,ServiceDomainCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() as z.ZodType<Prisma.ServiceDomainCreateManyArgs>;

export default ServiceDomainCreateManyArgsSchema;
