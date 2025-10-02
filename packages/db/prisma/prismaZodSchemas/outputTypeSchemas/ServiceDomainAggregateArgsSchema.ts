import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceDomainWhereInputSchema } from '../inputTypeSchemas/ServiceDomainWhereInputSchema'
import { ServiceDomainOrderByWithRelationInputSchema } from '../inputTypeSchemas/ServiceDomainOrderByWithRelationInputSchema'
import { ServiceDomainWhereUniqueInputSchema } from '../inputTypeSchemas/ServiceDomainWhereUniqueInputSchema'

export const ServiceDomainAggregateArgsSchema: z.ZodType<Prisma.ServiceDomainAggregateArgs> = z.object({
  where: ServiceDomainWhereInputSchema.optional(), 
  orderBy: z.union([ ServiceDomainOrderByWithRelationInputSchema.array(), ServiceDomainOrderByWithRelationInputSchema ]).optional(),
  cursor: ServiceDomainWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default ServiceDomainAggregateArgsSchema;
