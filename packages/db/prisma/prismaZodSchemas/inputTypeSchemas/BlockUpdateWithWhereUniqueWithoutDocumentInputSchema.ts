import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BlockWhereUniqueInputSchema } from './BlockWhereUniqueInputSchema';
import { BlockUpdateWithoutDocumentInputSchema } from './BlockUpdateWithoutDocumentInputSchema';
import { BlockUncheckedUpdateWithoutDocumentInputSchema } from './BlockUncheckedUpdateWithoutDocumentInputSchema';

export const BlockUpdateWithWhereUniqueWithoutDocumentInputSchema: z.ZodType<Prisma.BlockUpdateWithWhereUniqueWithoutDocumentInput> = z.strictObject({
  where: z.lazy(() => BlockWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => BlockUpdateWithoutDocumentInputSchema), z.lazy(() => BlockUncheckedUpdateWithoutDocumentInputSchema) ]),
});

export default BlockUpdateWithWhereUniqueWithoutDocumentInputSchema;
