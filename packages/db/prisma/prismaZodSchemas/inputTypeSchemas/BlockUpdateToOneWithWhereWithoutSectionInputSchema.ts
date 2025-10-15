import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BlockWhereInputSchema } from './BlockWhereInputSchema';
import { BlockUpdateWithoutSectionInputSchema } from './BlockUpdateWithoutSectionInputSchema';
import { BlockUncheckedUpdateWithoutSectionInputSchema } from './BlockUncheckedUpdateWithoutSectionInputSchema';

export const BlockUpdateToOneWithWhereWithoutSectionInputSchema: z.ZodType<Prisma.BlockUpdateToOneWithWhereWithoutSectionInput> = z.strictObject({
  where: z.lazy(() => BlockWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => BlockUpdateWithoutSectionInputSchema), z.lazy(() => BlockUncheckedUpdateWithoutSectionInputSchema) ]),
});

export default BlockUpdateToOneWithWhereWithoutSectionInputSchema;
