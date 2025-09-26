import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { userUpdateManyMutationInputSchema } from '../inputTypeSchemas/userUpdateManyMutationInputSchema'
import { userUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/userUncheckedUpdateManyInputSchema'
import { userWhereInputSchema } from '../inputTypeSchemas/userWhereInputSchema'

export const userUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.userUpdateManyAndReturnArgs> = z.object({
  data: z.union([ userUpdateManyMutationInputSchema,userUncheckedUpdateManyInputSchema ]),
  where: userWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() as z.ZodType<Prisma.userUpdateManyAndReturnArgs>;

export default userUpdateManyAndReturnArgsSchema;
