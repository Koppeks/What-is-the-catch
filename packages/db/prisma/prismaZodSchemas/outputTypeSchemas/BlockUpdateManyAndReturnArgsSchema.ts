import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BlockUpdateManyMutationInputSchema } from '../inputTypeSchemas/BlockUpdateManyMutationInputSchema'
import { BlockUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/BlockUncheckedUpdateManyInputSchema'
import { BlockWhereInputSchema } from '../inputTypeSchemas/BlockWhereInputSchema'

export const BlockUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.BlockUpdateManyAndReturnArgs> = z.object({
  data: z.union([ BlockUpdateManyMutationInputSchema, BlockUncheckedUpdateManyInputSchema ]),
  where: BlockWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default BlockUpdateManyAndReturnArgsSchema;
