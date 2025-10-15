import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BlockWhereUniqueInputSchema } from './BlockWhereUniqueInputSchema';
import { BlockUpdateWithoutParentInputSchema } from './BlockUpdateWithoutParentInputSchema';
import { BlockUncheckedUpdateWithoutParentInputSchema } from './BlockUncheckedUpdateWithoutParentInputSchema';

export const BlockUpdateWithWhereUniqueWithoutParentInputSchema: z.ZodType<Prisma.BlockUpdateWithWhereUniqueWithoutParentInput> = z.strictObject({
  where: z.lazy(() => BlockWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => BlockUpdateWithoutParentInputSchema), z.lazy(() => BlockUncheckedUpdateWithoutParentInputSchema) ]),
});

export default BlockUpdateWithWhereUniqueWithoutParentInputSchema;
