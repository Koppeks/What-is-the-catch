import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BlockUpdateWithoutChildrenInputSchema } from './BlockUpdateWithoutChildrenInputSchema';
import { BlockUncheckedUpdateWithoutChildrenInputSchema } from './BlockUncheckedUpdateWithoutChildrenInputSchema';
import { BlockCreateWithoutChildrenInputSchema } from './BlockCreateWithoutChildrenInputSchema';
import { BlockUncheckedCreateWithoutChildrenInputSchema } from './BlockUncheckedCreateWithoutChildrenInputSchema';
import { BlockWhereInputSchema } from './BlockWhereInputSchema';

export const BlockUpsertWithoutChildrenInputSchema: z.ZodType<Prisma.BlockUpsertWithoutChildrenInput> = z.strictObject({
  update: z.union([ z.lazy(() => BlockUpdateWithoutChildrenInputSchema), z.lazy(() => BlockUncheckedUpdateWithoutChildrenInputSchema) ]),
  create: z.union([ z.lazy(() => BlockCreateWithoutChildrenInputSchema), z.lazy(() => BlockUncheckedCreateWithoutChildrenInputSchema) ]),
  where: z.lazy(() => BlockWhereInputSchema).optional(),
});

export default BlockUpsertWithoutChildrenInputSchema;
