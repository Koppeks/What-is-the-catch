import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { userCreateManyInputSchema } from '../inputTypeSchemas/userCreateManyInputSchema'

export const userCreateManyAndReturnArgsSchema: z.ZodType<Prisma.userCreateManyAndReturnArgs> = z.object({
  data: z.union([ userCreateManyInputSchema,userCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() as z.ZodType<Prisma.userCreateManyAndReturnArgs>;

export default userCreateManyAndReturnArgsSchema;
