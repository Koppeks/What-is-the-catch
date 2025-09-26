import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceUpdateManyMutationInputSchema } from '../inputTypeSchemas/ServiceUpdateManyMutationInputSchema'
import { ServiceUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/ServiceUncheckedUpdateManyInputSchema'
import { ServiceWhereInputSchema } from '../inputTypeSchemas/ServiceWhereInputSchema'

export const ServiceUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.ServiceUpdateManyAndReturnArgs> = z.object({
  data: z.union([ ServiceUpdateManyMutationInputSchema,ServiceUncheckedUpdateManyInputSchema ]),
  where: ServiceWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() as z.ZodType<Prisma.ServiceUpdateManyAndReturnArgs>;

export default ServiceUpdateManyAndReturnArgsSchema;
