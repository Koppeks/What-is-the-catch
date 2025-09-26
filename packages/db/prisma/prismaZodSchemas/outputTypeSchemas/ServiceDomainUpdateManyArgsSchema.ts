import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceDomainUpdateManyMutationInputSchema } from '../inputTypeSchemas/ServiceDomainUpdateManyMutationInputSchema'
import { ServiceDomainUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/ServiceDomainUncheckedUpdateManyInputSchema'
import { ServiceDomainWhereInputSchema } from '../inputTypeSchemas/ServiceDomainWhereInputSchema'

export const ServiceDomainUpdateManyArgsSchema: z.ZodType<Prisma.ServiceDomainUpdateManyArgs> = z.object({
  data: z.union([ ServiceDomainUpdateManyMutationInputSchema,ServiceDomainUncheckedUpdateManyInputSchema ]),
  where: ServiceDomainWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() as z.ZodType<Prisma.ServiceDomainUpdateManyArgs>;

export default ServiceDomainUpdateManyArgsSchema;
