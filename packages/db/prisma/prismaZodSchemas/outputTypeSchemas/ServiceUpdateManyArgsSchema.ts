import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceUpdateManyMutationInputSchema } from '../inputTypeSchemas/ServiceUpdateManyMutationInputSchema'
import { ServiceUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/ServiceUncheckedUpdateManyInputSchema'
import { ServiceWhereInputSchema } from '../inputTypeSchemas/ServiceWhereInputSchema'

export const ServiceUpdateManyArgsSchema: z.ZodType<Prisma.ServiceUpdateManyArgs> = z.object({
  data: z.union([ ServiceUpdateManyMutationInputSchema,ServiceUncheckedUpdateManyInputSchema ]),
  where: ServiceWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() as z.ZodType<Prisma.ServiceUpdateManyArgs>;

export default ServiceUpdateManyArgsSchema;
