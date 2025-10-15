import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BlockScalarWhereInputSchema } from './BlockScalarWhereInputSchema';
import { BlockUpdateManyMutationInputSchema } from './BlockUpdateManyMutationInputSchema';
import { BlockUncheckedUpdateManyWithoutParentInputSchema } from './BlockUncheckedUpdateManyWithoutParentInputSchema';

export const BlockUpdateManyWithWhereWithoutParentInputSchema: z.ZodType<Prisma.BlockUpdateManyWithWhereWithoutParentInput> = z.strictObject({
  where: z.lazy(() => BlockScalarWhereInputSchema),
  data: z.union([ z.lazy(() => BlockUpdateManyMutationInputSchema), z.lazy(() => BlockUncheckedUpdateManyWithoutParentInputSchema) ]),
});

export default BlockUpdateManyWithWhereWithoutParentInputSchema;
