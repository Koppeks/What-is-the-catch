import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { userUpdateManyMutationInputSchema } from '../inputTypeSchemas/userUpdateManyMutationInputSchema'
import { userUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/userUncheckedUpdateManyInputSchema'
import { userWhereInputSchema } from '../inputTypeSchemas/userWhereInputSchema'

export const userUpdateManyArgsSchema: z.ZodType<Prisma.userUpdateManyArgs> = z.object({
  data: z.union([ userUpdateManyMutationInputSchema,userUncheckedUpdateManyInputSchema ]),
  where: userWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() as z.ZodType<Prisma.userUpdateManyArgs>;

export default userUpdateManyArgsSchema;
