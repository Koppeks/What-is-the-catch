import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceDomainUpdateManyMutationInputSchema } from '../inputTypeSchemas/ServiceDomainUpdateManyMutationInputSchema'
import { ServiceDomainUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/ServiceDomainUncheckedUpdateManyInputSchema'
import { ServiceDomainWhereInputSchema } from '../inputTypeSchemas/ServiceDomainWhereInputSchema'

export const ServiceDomainUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.ServiceDomainUpdateManyAndReturnArgs> = z.object({
  data: z.union([ ServiceDomainUpdateManyMutationInputSchema, ServiceDomainUncheckedUpdateManyInputSchema ]),
  where: ServiceDomainWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default ServiceDomainUpdateManyAndReturnArgsSchema;
