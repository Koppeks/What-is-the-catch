import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BlockWhereInputSchema } from './BlockWhereInputSchema';
import { BlockUpdateWithoutChildrenInputSchema } from './BlockUpdateWithoutChildrenInputSchema';
import { BlockUncheckedUpdateWithoutChildrenInputSchema } from './BlockUncheckedUpdateWithoutChildrenInputSchema';

export const BlockUpdateToOneWithWhereWithoutChildrenInputSchema: z.ZodType<Prisma.BlockUpdateToOneWithWhereWithoutChildrenInput> = z.strictObject({
  where: z.lazy(() => BlockWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => BlockUpdateWithoutChildrenInputSchema), z.lazy(() => BlockUncheckedUpdateWithoutChildrenInputSchema) ]),
});

export default BlockUpdateToOneWithWhereWithoutChildrenInputSchema;
