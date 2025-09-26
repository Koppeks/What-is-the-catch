import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceWhereInputSchema } from '../inputTypeSchemas/ServiceWhereInputSchema'

export const ServiceDeleteManyArgsSchema: z.ZodType<Prisma.ServiceDeleteManyArgs> = z.object({
  where: ServiceWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() as z.ZodType<Prisma.ServiceDeleteManyArgs>;

export default ServiceDeleteManyArgsSchema;
