import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceDomainWhereInputSchema } from '../inputTypeSchemas/ServiceDomainWhereInputSchema'

export const ServiceDomainDeleteManyArgsSchema: z.ZodType<Prisma.ServiceDomainDeleteManyArgs> = z.object({
  where: ServiceDomainWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() as z.ZodType<Prisma.ServiceDomainDeleteManyArgs>;

export default ServiceDomainDeleteManyArgsSchema;
