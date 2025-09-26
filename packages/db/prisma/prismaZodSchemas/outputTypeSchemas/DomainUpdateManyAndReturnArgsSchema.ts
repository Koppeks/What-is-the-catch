import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DomainUpdateManyMutationInputSchema } from '../inputTypeSchemas/DomainUpdateManyMutationInputSchema'
import { DomainUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/DomainUncheckedUpdateManyInputSchema'
import { DomainWhereInputSchema } from '../inputTypeSchemas/DomainWhereInputSchema'

export const DomainUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.DomainUpdateManyAndReturnArgs> = z.object({
  data: z.union([ DomainUpdateManyMutationInputSchema,DomainUncheckedUpdateManyInputSchema ]),
  where: DomainWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() as z.ZodType<Prisma.DomainUpdateManyAndReturnArgs>;

export default DomainUpdateManyAndReturnArgsSchema;
